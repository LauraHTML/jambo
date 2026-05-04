import React, { ReactNode, useState } from "react";
import {
    StyleSheet,
    View
} from "react-native";

import { Colors } from '@/constants/theme';
import TabButton from "../atoms/tabButton";

type TabKey = "lista" | "calendario";

type TabItem = {
    key: string;
    label: string;
    content: ReactNode;
};

type TabsProps = {
    tabs: TabItem[];
    initialTab?: string;
};

export default function Tabs({ tabs, initialTab }: TabsProps) {
    const [activeTab, setActiveTab] = useState<TabKey>("lista");

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.tabHeader}>
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.key}
                        label={tab.label}
                        isActive={activeTab === tab.key}
                        onPress={() => setActiveTab(tab.key)}
                    />
                ))}
            </View>

            {/* Conteúdo */}
            <View style={styles.content}>
                {tabs.find((t) => t.key === activeTab)?.content}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabHeader: {
        flexDirection: "row",
    },
    tabButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    activeTab: {
        backgroundColor: Colors.background,
    },
    tabText: {
        color: Colors.colorGreenPrimary,
        fontWeight: "500",
    },
    activeText: {
        color: Colors.colorGreenPrimary,
        fontWeight: "700",
    },
    content: {
        marginTop: 20,
        flex: 1,
    },
});