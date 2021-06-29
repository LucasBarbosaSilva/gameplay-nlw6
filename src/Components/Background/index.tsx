import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { colors } from "../../global/styles/theme";

type BackgroundProps = {
	children: ReactNode
}

export function Background({ children }: BackgroundProps) {
	const { secondary100, secondary80 } = colors;

	return (
		<LinearGradient
			style={styles.container}
			colors={[secondary80, secondary100]}
		>
			{children}
		</LinearGradient>
	)
}