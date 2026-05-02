import { FlatList, StatusBar, StyleSheet } from 'react-native';

import Card from '../organisms/card';

const dados = [
    { id: '1', nome: 'Item 1' },
    { id: '2', nome: 'Item 2' },
    { id: '3', nome: 'Item 3' },
    { id: '4', nome: 'Item 4' },
];

const plantas = [
    {
        id: 1,
        image: require('@/assets/images/sobre.jpg'),
        title: 'planta 01',
        description: 'Uma bela planta ornamental',
        sunExposure: 'Pleno sol',
        wateringFrequency: '2x por semana',
        categories: ['ornamental', 'suculenta']
    },
    {
        id: 2,
        image: require('@/assets/images/sobre.jpg'),
        title: 'planta 02',
        description: 'Planta aquática elegante',
        sunExposure: 'Pleno sol',
        wateringFrequency: '2x por semana',
        categories: ['ornamental', 'aquática']
    },
    {
        id: 3,
        image: require('@/assets/images/sobre.jpg'),
        title: 'planta 03',
        description: 'Planta versátil e resistente',
        sunExposure: 'Pleno sol',
        wateringFrequency: '2x por semana',
        categories: ['ornamental', 'aquática']
    },
]

export default function Grid() {
    return (
        <FlatList
            style={styles.container}
            data={plantas}
            numColumns={1}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
                <Card
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    sunExposure={item.sunExposure}
                    wateringFrequency={item.wateringFrequency}
                    categories={item.categories}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    card: {
        flex: 1,
        height: 100,
        backgroundColor: '#FFF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});