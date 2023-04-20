import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload, Image } from 'antd';

interface NewButtonProps {
  setBookUrl: (url: string) => void;
}

export const NewButton: React.FC<NewButtonProps> = ({ setBookUrl }) => {
  const [urlBook, setUrlBook] = useState(
    'https://www.wolflair.com/wp-content/uploads/2017/02/placeholder.jpg?w=640'
  );
  const props: UploadProps = {
    showUploadList: false,
    customRequest: componentsData => {
      const formData = new FormData();
      formData.append('image', componentsData.file);
      formData.append('key', '3fd0de5dc53e3b8cac45997064e2c41d');
      fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData,
      })
        .then(res => res.json())
        .then(data => {
          setBookUrl(data.data.url);
          setUrlBook(data.data.url);
        });
    },
  };
  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <p></p>
      <Image src={urlBook} height={200} alt="book" />
    </>
  );
};
