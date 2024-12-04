'use client';
import React, { useState } from 'react';
import './page.sass';
import Link from 'next/link';
import Image from 'next/image';
import ru from '../../public/ru.webp';
import en from '../../public/en.webp';

function Language() {
  return (
    <div className={'language'}>
      <div className="form">
        <p className="text">Выберите язык</p>
        <section>
          <Link
            href={{
              pathname: '/game/ru',
            }}
            className="btn ru"
          >
            <Image src={ru} alt="" />
          </Link>
          <Link
            href={{
              pathname: '/game/en',
            }}
            className="btn en"
          >
            <Image src={en} alt="" />
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Language;
