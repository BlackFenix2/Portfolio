"use client";
import { motion } from "framer-motion";

type Props = {
  height?: number;
  width?: number;
};

const signatureText = "Ernie Francis";
const signatureDashLength = 1200;

export default function Signature(props: Props) {
  const { height = 100, width = 100 } = props;

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={width}
        height={height}
        viewBox="0 0 760 220"
        preserveAspectRatio="xMidYMid meet"
        xmlSpace="preserve"
      >
        <motion.text
          x="50%"
          y="150"
          fontSize="130"
          fontFamily="Brush Script MT, Segoe Script, Lucida Handwriting, cursive"
          letterSpacing="1"
          textAnchor="middle"
          fill="none"
          stroke="#000"
          strokeWidth={3.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            strokeDasharray: signatureDashLength,
            strokeDashoffset: signatureDashLength,
            opacity: 1,
          }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.9, ease: "easeInOut" }}
        >
          {signatureText}
        </motion.text>

        <motion.text
          x="50%"
          y="150"
          fontSize="130"
          fontFamily="Brush Script MT, Segoe Script, Lucida Handwriting, cursive"
          letterSpacing="1"
          textAnchor="middle"
          fill="#000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.55, ease: "easeOut" }}
        >
          {signatureText}
        </motion.text>
      </svg>
    </div>
  );
}
