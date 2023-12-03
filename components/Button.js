import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Button.module.css';

const Button = ({ imageUrl, linkUrl, title, width, height }) => {
  return (
    <div className = {styles.headerImgs}>
      {React.isValidElement(imageUrl) ? ( // Check if imageUrl is a React element
        <div className = {styles.cartBtn}>{imageUrl}</div>
      ) : (
        <Image src = {imageUrl} width = {width} height = {height} className = {styles.cartBtn} />
      )}
      <Link   href      = {linkUrl}>
      <button className = {styles.button}>{title}</button>
      </Link>
    </div>
  );
};

export default Button;
