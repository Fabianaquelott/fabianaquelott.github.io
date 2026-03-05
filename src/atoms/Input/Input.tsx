import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Input({ className, ...props }: InputProps) {
  return <input className={`${styles.input} ${className || ''}`} {...props} />;
}

export function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={`${styles.textarea} ${className || ''}`} {...props} />;
}
