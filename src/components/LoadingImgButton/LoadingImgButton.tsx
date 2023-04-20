import React, { useState, useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { FormInstance, UploadProps } from 'antd';
import { Button, Upload, Image } from 'antd';

interface NewButtonProps {
  form: FormInstance<any>;
  image: string;
}

export const NewButton: React.FC<NewButtonProps> = ({
  image = 'https://www.wolflair.com/wp-content/uploads/2017/02/placeholder.jpg?w=640',
  form,
}) => {
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
          setUrlBook(data.data.url);
        });
    },
  };

  useEffect(() => {
    if (image.length > 0) setUrlBook(image);
  }, [image]);

  useEffect(() => {
    form.setFieldValue('image', urlBook);
  }, [urlBook]);
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
