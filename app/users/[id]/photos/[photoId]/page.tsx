import React from 'react';

interface Props {
  params: { id: number; photoId: number };
}

const PhotoDetailPage = ({ params: { id, photoId } }: Props) => {
  return (
    <>
      <div>User {id} </div>
      <div>PhotoDetailPage {photoId} </div>
    </>
  );
};

export default PhotoDetailPage;
