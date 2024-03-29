import { Pressable, PressableProps, Text } from 'react-native';
import { styles } from './style';
import { FilterProps } from './filter';

export function Filter({ filter, selected, ...rest }: FilterProps & PressableProps) {
  return (
    <Pressable style={[styles.pressable, selected && styles.pressableSelected]} { ...rest }>
        <Text style={styles.text}>{filter}</Text>
    </Pressable>
  );
}