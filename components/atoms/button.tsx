import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors, Borders } from "@/constants/theme"

type Button = {
    buttonText: string,
    style?: 'default' | 'secondary' | 'ghost' | 'destructive' | 'outline' ,
    textStyle?: 'textDefault' | 'textSecondary' | 'textGhost' | 'textDestructive' | 'textOutline' ,
    icone?: string,
    onPress?: () => void
}

export default function Button({buttonText, style = 'default', textStyle = 'default', icone, onPress}:Button){
    return(
        <TouchableOpacity style={[styles.button, styles[style]]} onPress={onPress}>
            <Text style={styles[textStyle]}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width: 108,
        height: 48,
        padding: 4,
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Borders.roundedLg
    },
    default:{
        color: Colors.text,
        fontSize: 18,
    },
    secondary:{
        backgroundColor: Colors.colorGreenSecondary,
        color: Colors.background,
        fontSize: 18,
    },
    ghost:{
        color: Colors.text,
        fontSize: 18,
    },
    destructive:{
        backgroundColor: Colors.colorDestructive,
        fontSize: 18,
    },
    outline:{
        borderColor: Colors.colorGreenPrimary,
        borderWidth: Borders.border
    },
    textDefault:{
        backgroundColor: Colors.colorGreenPrimary,
        color: Colors.background,
        fontSize: 18,
    },
    textSecondary:{
        backgroundColor: Colors.colorGreenSecondary,
        color: Colors.text,
        fontSize: 18,
    },
    textGhost:{
        color: Colors.text,
        fontSize: 18,
    },
    textDestructive:{
        color: Colors.textColorDestructive,
        fontSize: 18,
        fontWeight: 'bold',
    },
    textOutline:{
        color: Colors.colorGreenPrimary,
        fontWeight: 'bold',
    },
})