import React from 'react';
import { Redirect } from '@docusaurus/router';
// import styles from './styles.module.css';

export default function Home() {
  return <Redirect to="/blog" />;
}
