import { View, StyleSheet, Text } from 'react-native';
import { Colors, Borders } from "@/constants/theme"

type Badge = {
    badgeText: string,
    style?: 'pink' | 'greenPrimary' | 'greenSecondary' | 'purple' | 'yellow' ,
    textStyle?: 'textDefault' | 'textSecondary' ,
    icon?: string,
    onPress?: () => void
}

export default function Badge({badgeText, style = 'pink', textStyle = 'textDefault', icon}:Badge){
    return(
        <View style={[styles.badge, styles[style]]}>
            <Text style={styles[textStyle]}>{badgeText}</Text>
            <Text>{icon}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge:{
        height: 32,
        paddingHorizontal: 6,
        paddingVertical: 4,
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Borders.roundedLg
    },
    pink:{
        backgroundColor: Colors.colorPink,
        fontSize: 18,
    },
    greenPrimary:{
        backgroundColor: Colors.colorGreenPrimary,
        fontSize: 18,
    },
    greenSecondary:{
        backgroundColor: Colors.colorGreenSecondary,
        fontSize: 18,
    },
    purple:{
        backgroundColor: Colors.colorPurple,
        fontSize: 18,
    },
    yellow:{
        backgroundColor: Colors.colorYellow,
    },
    textDefault:{
        color: Colors.text,
        fontSize: 16,
    },
    textSecondary:{
        color: Colors.colorWhite,
        fontSize: 16,
        fontWeight: 'bold',
    }
})