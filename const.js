export const LOCALSTORAGE_KEYS = {
  lang: 'tonKristall-keyboard-lang',
};

export const SYMBOLS_KEY = {
  enter: '\n',
  tab: '\t',
};

export const TAGS = {
  div: 'div',
  header: 'header',
  main: 'main',
  h1: 'h1',
  textarea: 'textarea',
  footer: 'footer',
};

export const HEAD_APP = 'virtual keyboard';

export const KEYS_ITEMS = [
  [
    { en: { normal: '`', shift: '~' }, ru: { normal: 'ё', shift: '' }, code: 'Backquote' },
    { en: { normal: '1', shift: '!' }, ru: { normal: '1', shift: '!' }, code: 'Digit1' },
    { en: { normal: '2', shift: '@' }, ru: { normal: '2', shift: '"' }, code: 'Digit2' },
    { en: { normal: '3', shift: '#' }, ru: { normal: '3', shift: '№' }, code: 'Digit3' },
    { en: { normal: '4', shift: '$' }, ru: { normal: '4', shift: ';' }, code: 'Digit4' },
    { en: { normal: '5', shift: '%' }, ru: { normal: '5', shift: '%' }, code: 'Digit5' },
    { en: { normal: '6', shift: '^' }, ru: { normal: '6', shift: ':' }, code: 'Digit6' },
    { en: { normal: '7', shift: '&' }, ru: { normal: '7', shift: '?' }, code: 'Digit7' },
    { en: { normal: '8', shift: '*' }, ru: { normal: '8', shift: '*' }, code: 'Digit8' },
    { en: { normal: '9', shift: '(' }, ru: { normal: '9', shift: '(' }, code: 'Digit9' },
    { en: { normal: '0', shift: ')' }, ru: { normal: '0', shift: ')' }, code: 'Digit0' },
    { en: { normal: '-', shift: '_' }, ru: { normal: '-', shift: '_' }, code: 'Minus' },
    { en: { normal: '=', shift: '+' }, ru: { normal: '=', shift: '+' }, code: 'Equal' },
    { en: { normal: 'Backspace' }, ru: { normal: 'Backspace' }, code: 'Backspace' },
  ],
  [
    { en: { normal: 'Tab' }, ru: { normal: 'Tab' }, code: 'Tab' },
    { en: { normal: 'q' }, ru: { normal: 'й' }, code: 'KeyQ' },
    { en: { normal: 'w' }, ru: { normal: 'ц' }, code: 'KeyW' },
    { en: { normal: 'e' }, ru: { normal: 'у' }, code: 'KeyE' },
    { en: { normal: 'r' }, ru: { normal: 'к' }, code: 'KeyR' },
    { en: { normal: 't' }, ru: { normal: 'е' }, code: 'KeyT' },
    { en: { normal: 'y' }, ru: { normal: 'н' }, code: 'KeyY' },
    { en: { normal: 'u' }, ru: { normal: 'г' }, code: 'KeyU' },
    { en: { normal: 'i' }, ru: { normal: 'ш' }, code: 'KeyI' },
    { en: { normal: 'o' }, ru: { normal: 'щ' }, code: 'KeyO' },
    { en: { normal: 'p' }, ru: { normal: 'з' }, code: 'KeyP' },
    { en: { normal: '[', shift: '{' }, ru: { normal: 'х', shift: '' }, code: 'BracketLeft' },
    { en: { normal: ']', shift: '}' }, ru: { normal: 'ъ', shift: '' }, code: 'BracketRight' },
    { en: { normal: '\\', shift: '|' }, ru: { normal: '\\', shift: '/' }, code: 'Backslash' },
  ],
  [
    { en: { normal: 'CapsLock' }, ru: { normal: 'CapsLock' }, code: 'CapsLock' },
    { en: { normal: 'a' }, ru: { normal: 'ф' }, code: 'KeyA' },
    { en: { normal: 's' }, ru: { normal: 'ы' }, code: 'KeyS' },
    { en: { normal: 'd' }, ru: { normal: 'в' }, code: 'KeyD' },
    { en: { normal: 'f' }, ru: { normal: 'а' }, code: 'KeyF' },
    { en: { normal: 'g' }, ru: { normal: 'п' }, code: 'KeyG' },
    { en: { normal: 'h' }, ru: { normal: 'р' }, code: 'KeyH' },
    { en: { normal: 'j' }, ru: { normal: 'о' }, code: 'KeyJ' },
    { en: { normal: 'k' }, ru: { normal: 'л' }, code: 'KeyK' },
    { en: { normal: 'l' }, ru: { normal: 'д' }, code: 'KeyL' },
    { en: { normal: ';', shift: ':' }, ru: { normal: 'ж', shift: '' }, code: 'Semicolon' },
    { en: { normal: '\'', shift: '"' }, ru: { normal: 'э', shift: '' }, code: 'Quote' },
    { en: { normal: 'Enter' }, ru: { normal: 'Enter' }, code: 'Enter' },
  ],
  [
    { en: { normal: 'Shift' }, ru: { normal: 'Shift' }, code: 'ShiftLeft' },
    { en: { normal: 'z' }, ru: { normal: 'я' }, code: 'KeyZ' },
    { en: { normal: 'x' }, ru: { normal: 'ч' }, code: 'KeyX' },
    { en: { normal: 'c' }, ru: { normal: 'с' }, code: 'KeyC' },
    { en: { normal: 'v' }, ru: { normal: 'м' }, code: 'KeyV' },
    { en: { normal: 'b' }, ru: { normal: 'и' }, code: 'KeyB' },
    { en: { normal: 'n' }, ru: { normal: 'т' }, code: 'KeyN' },
    { en: { normal: 'm' }, ru: { normal: 'ь' }, code: 'KeyM' },
    { en: { normal: ',', shift: '<' }, ru: { normal: 'б', shift: '' }, code: 'Comma' },
    { en: { normal: '.', shift: '>' }, ru: { normal: 'ю', shift: '' }, code: 'Period' },
    { en: { normal: '/', shift: '?' }, ru: { normal: '.', shift: ',' }, code: 'Slash' },
    { en: { normal: '▲' }, ru: { normal: '▲' }, code: 'ArrowUp' },
    { en: { normal: 'Shift' }, ru: { normal: 'Shift' }, code: 'ShiftRight' },
  ],
  [
    { en: { normal: 'Ctrl' }, ru: { normal: 'Ctrl' }, code: 'ControlLeft' },
    { en: { normal: 'Win' }, ru: { normal: 'Win' }, code: 'MetaLeft' },
    { en: { normal: 'Alt' }, ru: { normal: 'Alt' }, code: 'AltLeft' },
    { en: { normal: ' ' }, ru: { normal: ' ' }, code: 'Space' },
    { en: { normal: 'Alt' }, ru: { normal: 'Alt' }, code: 'AltRight' },
    { en: { normal: 'Ctrl' }, ru: { normal: 'Ctrl' }, code: 'ControlRight' },
    { en: { normal: '◄' }, ru: { normal: '◄' }, code: 'ArrowLeft' },
    { en: { normal: '▼' }, ru: { normal: '▼' }, code: 'ArrowDown' },
    { en: { normal: '►' }, ru: { normal: '►' }, code: 'ArrowRight' },
  ],
];

export const TEXT_FOOTER = {
  system_info: 'Клавиатура создана в операционной системе Windows',
  change_lang: 'Комбинация для переключения языка: левый Alt + Ctrl',
};
