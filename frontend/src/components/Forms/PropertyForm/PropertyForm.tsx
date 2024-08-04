import React, { useCallback, useState } from 'react';
import { RectangleButton, UploadPropertyImages, PropertyCheckBoxContainer, PropertyInputField, PropertyTextareaField } from '@/components';
import { NewProperty, PropertyErrors, UpdateProperty } from '@/types';
import { useAppDispatch } from '@/hooks';
import { convertToFormData, validatePropertyForm } from '@/utils';
import { createListings, updateListings } from '@/state';

interface Props {
  initialFormData: NewProperty | UpdateProperty;
  isEditing?: boolean;
}

export const PropertyForm: React.FC<Props> = ({ initialFormData, isEditing = false }) => {
  const [formData, setFormData] = useState<NewProperty | UpdateProperty>(initialFormData);
  const [errors, setErrors] = useState<PropertyErrors>();
  const dispatch = useAppDispatch();

  //Removes image from images array
  const handleRemoveImage = useCallback(
    (index: number) => {
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
    },
    [isEditing]
  );

  //updates form data in response to user input changes.
  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => {
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
  }, []);

  // Dispatches createListings or updateListings action.
  const onSubmits = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Validate form data before dispatching registration action.
      const validateErrors = validatePropertyForm(formData);
      console.log(validateErrors);
      if (Object.keys(validateErrors).length > 0) {
        setErrors(validateErrors);
        return;
      }

      // Dispatch registration action.
      const formDataToSend = convertToFormData(formData);
      if (!isEditing) {
        dispatch(createListings(formDataToSend));
        setFormData(initialFormData);
      } else {
        const propertyData = { ...formData } as UpdateProperty;
        dispatch(updateListings({ property: formDataToSend, propertyId: propertyData.property_id }));
        propertyData.images_to_delete = [];
        setFormData(propertyData);
      }
    },
    [dispatch, formData, isEditing, initialFormData]
  );

  return (
    <form onSubmit={onSubmits} className='flex-1 flex gap-4 flex-col' action=''>
      <PropertyInputField
        onChange={handleInputChange}
        name='title'
        value={formData.title}
        label='Title'
        description='Title for your place, should be short and catchy as in advertisement'
        error={errors?.title}
      />
      <PropertyInputField
        onChange={handleInputChange}
        name='address'
        value={formData.address}
        label='address'
        description='Address to this place'
        error={errors?.address}
      />
      <PropertyInputField
        onChange={handleInputChange}
        name='city'
        value={formData.city}
        label='city'
        description='City where the place is located'
        error={errors?.city}
      />
      <PropertyInputField
        error={errors?.state}
        onChange={handleInputChange}
        name='state'
        value={formData.state}
        label='province/state'
        description='Province/State where the place is located'
      />
      <UploadPropertyImages error={errors?.images} onChange={handleInputChange} images={formData.images} onRemove={handleRemoveImage} />
      <PropertyTextareaField
        onChange={handleInputChange}
        name='description'
        value={formData.description}
        label='Description'
        description='Description of the place.'
        error={errors?.description}
      />
      <PropertyTextareaField
        onChange={handleInputChange}
        name='extraInfo'
        value={formData.extraInfo}
        label='Extra info'
        description='Extra information about the property'
      />
      <PropertyCheckBoxContainer formData={formData} handleChange={handleInputChange} />

      <div className='flex flex-col md:flex-row gap-4'>
        <RectangleButton variant='primary' type='submit' label={isEditing ? 'Update' : 'Create'} />
        <RectangleButton variant='secondary' label='Cancel' />
      </div>
    </form>
  );
};
