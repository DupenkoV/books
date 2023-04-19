import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';

export const LoadingFileButton: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <ImgCrop rotationSlider>
      <Upload
        action=""
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}>
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};
