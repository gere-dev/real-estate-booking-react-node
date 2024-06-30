import { MdCloudUpload } from 'react-icons/md';

export const UploadImageInput = () => {
  return (
    <label className='hover:cursor-pointer text-gray-500 h-28 border w-fit px-4 py-2 rounded flex items-center gap-2' htmlFor='upload'>
      <MdCloudUpload size={24} /> Upload
      <input className='hidden ' type='file' id='upload' />
    </label>
  );
};
