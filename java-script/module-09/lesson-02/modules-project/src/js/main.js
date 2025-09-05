// Named import
// import { load, save } from './localstore-api';

// Default import
// import ls from './localstore-api';

// Namespace import
// import * as bsLock from 'body-scroll-lock';
// import * as lsInterface from './localstore-api';
// import * as lsOptions from './config';

// Image import
import imgPath from '/photo.avif';
import iconPath from '../img/logo.svg';
console.log('🚀 ~ imgPath:', imgPath);
console.log('🚀 ~ iconPath:', iconPath);

const fullIconPath = `/src${iconPath}`;
console.log('🚀 ~ fullIconPath:', fullIconPath);

const iconMarkup = `<img src="${iconPath}" alt="Some alt text" />`;

const illEl = document.createElement('img');
illEl.src = imgPath;
illEl.alt = 'Sand';
illEl.width = '300';

document.querySelector('main').append(illEl);
// document.querySelector('main').insertAdjacentHTML('beforebegin', iconMarkup);

// console.log(lsOptions.themeOptions);

// lsInterface.load(lsOptions.LS_KEY);

// ls.save(LS_KEY, themeOptions);

// const lsData = ls.load(LS_KEY);
// console.log('🚀 ~ lsData:', lsData);
// save(LS_KEY, themeOptions);

// const lsThemeOptions = load(LS_KEY);
// console.log('🚀 ~ lsThemeOptions:', lsThemeOptions);
