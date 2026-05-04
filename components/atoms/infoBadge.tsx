import { View, StyleSheet, Text } from 'react-native';
import { Colors, Borders } from "@/constants/theme"

type Badge = {
    label: string,
    value: string,
    icon?: string,
    onPress?: () => void
}

export default function InfoBadge({label, value, icon}:Badge){
    return(
         <View style={styles.infoBadge}>
            <Text style={styles.infoBadgeIcon}>{icon}</Text>
            <View>
              <Text style={styles.infoBadgeLabel}>{label}</Text>
              <Text style={styles.infoBadgeValue}>{value}</Text>
            </View>
          </View>
    )
}

const styles = StyleSheet.create({
    infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoCol: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
  },
  infoSeparator: {
    width: 1,
    height: 36,
    backgroundColor: '#E8F0ED',
    marginHorizontal: 16,
  },
  infoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  infoBadgeIcon: {
    fontSize: 22,
  },
  infoBadgeLabel: {
    fontSize: 11,
    color: '#95B0A8',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  infoBadgeValue: {
    fontSize: 13,
    color: '#2D6A4F',
    fontWeight: '600',
  },
})