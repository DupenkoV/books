import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState, useRef } from 'react';

interface LoadingFileButtonProps {
  setBookUrl: (url: string) => void;
}

export const LoadingFileButton: React.FC<LoadingFileButtonProps> = ({
  setBookUrl,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const filePicker = useRef(null);
  const [urlFor, setUrlFor] = useState(null);
  const handleChange = async e => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('key', '3fd0de5dc53e3b8cac45997064e2c41d');
    const res = await fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    setUrlFor(data.data.url);
    setBookUrl(data.data.url);
  };

  return (
    <>
      <input
        type="file"
        onChange={handleChange}
        accept="image/*"
        ref={filePicker}
      />
      <button onClick={handleUpload}>Добавить файл</button>
      <div style={{ height: 200 }}>
        <img src={urlFor} style={{ height: 200 }}></img>
      </div>
    </>
  );
  //const [fileList, setFileList] = useState<UploadFile[]>([]);

  //const onChange: UploadProps['onChange'] = async ({
  //  fileList: newFileList,
  //}) => {
  //  setFileList(newFileList);
  //  const formData = new FormData();
  //  console.log(fileList[0]);
  //  formData.append('image', fileList[0] as any);
  //  formData.append('key', '3fd0de5dc53e3b8cac45997064e2c41d');
  //  console.log(formData);
  //  const res = await fetch('https://api.imgbb.com/1/upload', {
  //    method: 'POST',
  //    body: formData,
  //  });
  //  const data = await res.json();
  //  console.log(data);
  //};

  // const formData = new FormData();
  // formData.append('image', selectedFile);
  // formData.append('key', '3fd0de5dc53e3b8cac45997064e2c41d');

  // const res = await fetch('https://api.imgbb.com/1/upload', {
  //   method: 'POST',
  //   body: formData,
  // });
  // const data = await res.json();

  // return ;

  //return (
  //  <ImgCrop rotationSlider>
  //    <Upload listType="picture-card" fileList={fileList} onChange={onChange}>
  //      {fileList.length < 1 && '+ Upload'}
  //    </Upload>
  //  </ImgCrop>
  //);
};
