import Toast from 'react-native-toast-message';

export const newToast = (title: string, text: string, type: string) => {
  Toast.show({
    text1: title,
    text2: text,
    type,
  });
};

// export const toastConfig = {
//   success: (props: BaseToastProps) => {
//     return (
//       <BaseToast />
//     )
//   },
// };
