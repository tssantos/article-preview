import React from 'react';
import styles from './App.module.css';

import DrawerImage from './assets/drawers.jpg';
import AvatarImage from './assets/avatar-michelle.jpg'
import { ReactComponent as IconShare } from './assets/icon-share.svg';

import { ReactComponent as IconPinterest } from './assets/icon-pinterest.svg';
import { ReactComponent as IconFacebook } from './assets/icon-facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icon-twitter.svg';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.component}>
        <img className={styles.image} src={DrawerImage} alt='drawer' />
        <div className={styles.content}>
          <h1>Shift the overall look and feel by adding these wonderful
          touches to furniture in your home</h1>

          <p>Ever been in a room and felt like something was missing? Perhaps
          it felt slightly bare and uninviting. I've got some simple tips
          to help you make any room feel complete.</p>

          <div className={styles.footer}>
            <div className={styles.avatar}>
              <img src={AvatarImage} alt='avatar'/>
            </div>
            <div className={styles.author}>
              <p className={styles.name}>Michelle Appleton</p>
              <p className={styles.date}>28 Jun 2020</p>
            </div>
            <div className={styles.share}>
              <div className={styles.hover}>
                <p>Share</p>
                <IconFacebook/>
                <IconTwitter/>
                <IconPinterest/>
              </div>
              <IconShare/>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
