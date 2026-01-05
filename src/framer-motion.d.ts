import "react";
import {
    MotionProps as OriginalMotionProps,
    AnimationControls,
    Target,
    VariantLabels,
    Transition,
    domAnimation
} from "framer-motion";

declare module "framer-motion" {
    export interface MotionProps {
        initial?: boolean | Target | VariantLabels;
        animate?: AnimationControls | Target | VariantLabels | boolean;
        exit?: Target | VariantLabels;
        transition?: Transition;
        variants?: { [key: string]: Target | VariantLabels };
        style?: React.CSSProperties; // sometimes missing in strict intersections

        // Interactions
        whileHover?: Target | VariantLabels;
        whileTap?: Target | VariantLabels;
        whileFocus?: Target | VariantLabels;
        whileDrag?: Target | VariantLabels;
        whileInView?: Target | VariantLabels;

        // Viewport
        viewport?: {
            once?: boolean;
            amount?: "some" | "all" | number;
            margin?: string;
            root?: React.RefObject<Element>;
        };

        // Events
        onAnimationStart?: (definition: any) => void;
        onAnimationComplete?: (definition: any) => void;
        onUpdate?: (latest: any) => void;
        onDragStart?: (event: any, info: any) => void;
        onDrag?: (event: any, info: any) => void;
        onDragEnd?: (event: any, info: any) => void;
        onDirectionLock?: (axis: "x" | "y") => void;
        onDragTransitionEnd?: () => void;
    }
}
