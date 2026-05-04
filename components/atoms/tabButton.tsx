import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Borders } from '@/constants/theme';

type TabButton = {
  label: string;
  isActive: boolean;
  onPress: () => void;
};

export default function TabButton({ label, isActive, onPress }: TabButton) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isActive && styles.active]}
    >
      <Text style={[styles.text, isActive && styles.activeText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: Borders.borderMd,
  },
  active: {
    backgroundColor: Colors.background,
  },
  text: {
    fontSize: 18,
    color: Colors.text ,
  },
  activeText: {
    color: Colors.colorGreenPrimary,
    fontWeight: "bold",
  },
});