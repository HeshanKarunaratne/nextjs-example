import React from 'react'
import OnePiece from '../../public/one-piece.jpg';
import Image from 'next/image';

function Users() {
  return (
    <div>One Piece Users
      {/* <Image src={OnePiece} alt='one-piece' width={500} height={500} /> */}
      <Image width={1000} height={1000} alt='nature' src="https://images.unsplash.com/photo-1705517649861-5450dc4dd44a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default Users

export const generateMetadata = () => {
  return {
    title: "User page generated",
    description: "Heshans description"
  }
}