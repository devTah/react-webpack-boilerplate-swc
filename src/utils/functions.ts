import axios from 'axios';

export const convertPathImage = (image?: string) => {
  if (typeof image !== 'string') return '';
  if (image && image.match(/^(http|https)/g)) {
    return image;
  }
  if (image && !image.includes('src/assets/images'))
    return `${process.env.REACT_APP_API_BASE_URL}image/${image}`;
  return '';
};

export const getVideoMetadata = (file: File, size: number) => {
  return new Promise<HTMLVideoElement>((resolve, reject) => {
    const video = document.createElement('video');
    video.preload = 'metadata';

    console.log('------------file-------------', { file }, size);

    if (file.size > size) {
      reject(
        new Error(`File của bạn quá lớn, vui lòng thấp hơn ${size * 0.000001}MB`),
      );
    }
    video.onloadedmetadata = function () {
      const duration = video.duration;
      resolve(video);
    };

    video.onerror = function (ev) {
      console.log({ ev });
      reject(new Error('Video: không thể load metadata!'));
    };

    video.src = URL.createObjectURL(file);
  });
};

export const getMetadata = (
  src: string,
  options?: {
    type?: 'image/*' | 'application/pdf';
  },
) => {
  return new Promise<HTMLInputElement>(async (resolve, reject) => {
    try {
      const input = document.createElement('input');

      const res = await requestAuthorFile(src, options?.type);
      input.src = res;

      input.onloadeddata = () => {
        resolve(input);
      };
    } catch (error) {
      reject(error);
    }
  });
};

const toBlob = (
  src: string,
  options?: {
    type?: 'image/*' | 'application/pdf';
  },
) => {
  try {
    const blob = new Blob([src], {
      type: options?.type,
    });
    return URL.createObjectURL(blob);
  } catch (error) {
    throw new Error('toBlob Error');
  }
};

export const requestAuthorFile = (
  url: string,
  type?: 'image/*' | 'application/pdf',
) => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Not Authorization');

      const res = await axios.get(url, {
        responseType: 'arraybuffer',
        headers: {
          authorization: token,
        },
      });

      const blobUrl = toBlob(res.data, { type: type });
      resolve(blobUrl);
    } catch (error) {
      reject(error);
    }
  });
};
