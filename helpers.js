import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const vScale = size => height / guidelineBaseHeight * size; // vertical scale
const mScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor; // moderate scale

export {scale, vScale, mScale};