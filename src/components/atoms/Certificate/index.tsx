import React from 'react';
import CertificateImage from '@assets/images/certificate.png';
import ImageComponent from '../LazyImage';
import './index.scss';

interface CertificateProps {
  content: string
}

const Certificate = React.forwardRef<HTMLDivElement ,CertificateProps>(({ content }, ref) => {
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: content }}></div>;
});

export default Certificate;
