import React, { useState } from 'react';
import { RectangleButton, UploadPropertyImages, PropertyCheckBoxContainer, PropertyInputField, PropertyTextareaField } from '@/components';
import { NewProperty, Property, UpdateProperty } from '@/types';
import { useAppDispatch } from '@/state/hooks';
import { createListings, updateListings } from '@/state/listings/listingsSlice';
import { convertToFormData } from '@/utils/convert.formdata';

interface Props {
  initialFormData: NewProperty | UpdateProperty;
  isEditing?: boolean;
}

export const PropertyForm: React.FC<Props> = ({ initialFormData, isEditing = false }) => {
  const [formData, setFormData] = useState<NewProperty | UpdateProperty>(initialFormData);

  const onRemove = (index: number) => {
    if (!isEditing) {
      const updatedFormData = { ...formData };
      updatedFormData.images = updatedFormData.images.filter((_, i) => i !== index);
      setFormData(updatedFormData);
    } else {
      const updatedFormData = { ...formData } as UpdateProperty;
      const image_to_delete = updatedFormData.images[index];
      if (typeof image_to_delete === 'string') {
        updatedFormData.images_to_delete.push(image_to_delete);
      }
      updatedFormData.images = updatedFormData.images.filter((_, i) => i !== index);

      setFormData(updatedFormData);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      const files = (event.target as HTMLInputElement).files;

      if (files) {
        setFormData((prev) => ({ ...prev, images: [...prev.images, ...Array.from(files)] }));
      }
    } else if (type === 'checkbox') {
      const checked = (event.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const dispatch = useAppDispatch();

  const onSubmits = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = convertToFormData(formData);
    // console.log('formDataToSend', formDataToSend);
    if (!isEditing) {
      dispatch(createListings(formDataToSend));
      setFormData(initialFormData);
    } else {
      const propertyData = { ...formData } as UpdateProperty;
      dispatch(updateListings({ property: formDataToSend, propertyId: propertyData.property_id }));
      propertyData.images_to_delete = [];
      setFormData(propertyData);
    }
  };
  console.log(formData);

  return (
    <form onSubmit={onSubmits} className='flex-1 flex gap-4 flex-col' action=''>
      <PropertyInputField
        onChange={handleChange}
        name='title'
        value={formData.title}
        label='Title'
        description='Title for your place, should be short and catchy as in advertisement'
      />
      <PropertyInputField onChange={handleChange} name='address' value={formData.address} label='address' description='Address to this place' />
      <PropertyInputField onChange={handleChange} name='city' value={formData.city} label='city' description='City where the place is located' />
      <PropertyInputField
        onChange={handleChange}
        name='state'
        value={formData.state}
        label='province/state'
        description='Province/State where the place is located'
      />
      <UploadPropertyImages onChange={handleChange} images={formData.images} onRemove={onRemove} />
      <PropertyTextareaField
        onChange={handleChange}
        name='description'
        value={formData.description}
        label='Description'
        description='Description of the place.'
      />
      <PropertyTextareaField
        onChange={handleChange}
        name='extraInfo'
        value={formData.extraInfo}
        label='Extra info'
        description='Extra information about the property'
      />
      <PropertyCheckBoxContainer formData={formData} handleChange={handleChange} />

      <div className='flex flex-col md:flex-row gap-4'>
        <RectangleButton type='submit' label={isEditing ? 'Update' : 'Create'} />
        <RectangleButton className='bg-white border border-gray-300 text-gray-500' label='Cancel' />
      </div>
    </form>
  );
};
