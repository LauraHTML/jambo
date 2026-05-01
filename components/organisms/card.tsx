import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';

// ─── Types ────────────────────────────────────────────────────────────────────

type PlantCategory =
  | 'ornamental'
  | 'suculenta'
  | 'aromática'
  | 'medicinal'
  | 'frutífera'
  | 'aquática'
  | 'trepadeira';

type SunExposure = 'Pleno sol' | 'Meia sombra' | 'Sombra';

type WateringFrequency =
  | 'Diária'
  | '2x por semana'
  | 'Semanal'
  | 'Quinzenal'
  | 'Mensal';

interface PlantCardProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
  sunExposure: SunExposure;
  wateringFrequency: WateringFrequency;
  categories: PlantCategory[];
  onPress?: () => void;
}

// ─── Category config ──────────────────────────────────────────────────────────

const CATEGORY_STYLES: Record<
  PlantCategory,
  { bg: string; text: string; emoji: string }
> = {
  ornamental: { bg: '#FFF0F5', text: '#C2185B', emoji: '🌸' },
  suculenta:  { bg: '#F0FAF0', text: '#2E7D32', emoji: '🌵' },
  aromática:  { bg: '#FFF8E1', text: '#F57F17', emoji: '🌿' },
  medicinal:  { bg: '#E8F5E9', text: '#388E3C', emoji: '🍃' },
  frutífera:  { bg: '#FFF3E0', text: '#E65100', emoji: '🍋' },
  aquática:   { bg: '#E3F2FD', text: '#1565C0', emoji: '💧' },
  trepadeira: { bg: '#F3E5F5', text: '#6A1B9A', emoji: '🌱' },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const CategoryTag: React.FC<{ category: PlantCategory }> = ({ category }) => {
  const style = CATEGORY_STYLES[category];
  return (
    <View style={[styles.tag, { backgroundColor: style.bg }]}>
      <Text style={styles.tagEmoji}>{style.emoji}</Text>
      <Text style={[styles.tagText, { color: style.text }]}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Text>
    </View>
  );
};

const InfoBadge: React.FC<{ icon: string; label: string; value: string }> = ({
  icon,
  label,
  value,
}) => (
  <View style={styles.infoBadge}>
    <Text style={styles.infoBadgeIcon}>{icon}</Text>
    <View>
      <Text style={styles.infoBadgeLabel}>{label}</Text>
      <Text style={styles.infoBadgeValue}>{value}</Text>
    </View>
  </View>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const PlantCard: React.FC<PlantCardProps> = ({
  image,
  title,
  description,
  sunExposure,
  wateringFrequency,
  categories,
  onPress,
}) => {
  const sunIcon =
    sunExposure === 'Pleno sol'
      ? '☀️'
      : sunExposure === 'Meia sombra'
      ? '⛅'
      : '🌥️';

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.92}
    >
      {/* Image */}
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        {/* Subtle green tint overlay at bottom */}
        <View style={styles.imageGradient} />
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Description */}
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Info badges */}
        <View style={styles.infoRow}>
          <InfoBadge icon={sunIcon} label="Exposição solar" value={sunExposure} />
          <View style={styles.infoSeparator} />
          <InfoBadge icon="💧" label="Rega" value={wateringFrequency} />
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Category tags */}
        <View style={styles.tagsLabel}>
          <Text style={styles.tagsLabelText}>Categorias</Text>
        </View>
          {categories.map((cat) => (
            <CategoryTag key={cat} category={cat} />
          ))}
      </View>
    </TouchableOpacity>
  );
};

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginVertical: 10,
    // Shadow (iOS)
    shadowColor: '#2D6A4F',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.10,
    shadowRadius: 18,
    // Elevation (Android)
    elevation: 5,
  },

  // ── Image ──
  imageWrapper: {
    height: 210,
    width: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.18)',
  },

  // ── Body ──
  body: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B4332',
    letterSpacing: -0.3,
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    lineHeight: 21,
    color: '#52796F',
    marginBottom: 16,
  },

  divider: {
    height: 1,
    backgroundColor: '#F0F4F2',
    marginVertical: 14,
  },

  // ── Info badges ──
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
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

  // ── Tags ──
  tagsLabel: {
    marginBottom: 10,
  },
  tagsLabelText: {
    fontSize: 11,
    color: '#95B0A8',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  tagsRow: {
    flexDirection: 'row',
    gap: 8,
    paddingRight: 4,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 4,
  },
  tagEmoji: {
    fontSize: 12,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },
});

// ─── Export ───────────────────────────────────────────────────────────────────

export default PlantCard;

// ─── Usage example ────────────────────────────────────────────────────────────
//
// <PlantCard
//   image={{ uri: 'https://example.com/lavanda.jpg' }}
//   title="Lavanda"
//   description="Planta perene de origem mediterrânea, conhecida pelo seu aroma floral intenso e flores lilases. Ideal para bordaduras e vasos."
//   sunExposure="Pleno sol"
//   wateringFrequency="2x por semana"
//   categories={['ornamental', 'aromática', 'medicinal']}
//   onPress={() => console.log('card pressionado')}
// />