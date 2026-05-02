import { View, StyleSheet, Text } from 'react-native';
import { Colors, Borders } from "@/constants/theme"

type Badge = {
    badgeText: string,
    style?: 'pink' | 'greenPrimary' | 'greenSecondary' | 'purple' | 'yellow' ,
    textStyle?: 'textDefault' | 'textSecondary' ,
    icone?: string,
    onPress?: () => void
}

export default function Badge({badgeText, style = 'pink', textStyle = 'textDefault', icone}:Badge){
    return(
        <View style={[styles.badge, styles[style]]}>
            <Text style={styles[textStyle]}>{badgeText}</Text>
            {icone}
        </View>
    )
}

const styles = StyleSheet.create({
    badge:{
        height: 32,
        paddingHorizontal: 4,
        paddingVertical: 6,
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
        color: Colors.background,
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
        borderColor: Colors.colorYellow,
        borderWidth: Borders.border
    },
    textDefault:{
        color: Colors.text,
        fontSize: 16,
    },
    textSecondary:{
        color: Colors.background,
        fontSize: 16,
    }
})