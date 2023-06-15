import React, { useRef, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";

export const Dummy1 = ({ left, top, text, bg }) => {
  const dummyRef = useRef(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  //   const handleTooltipToggle = () => {
  //     setTooltipVisible(!tooltipVisible);
  //   };

  return (
    <TouchableOpacity
      ref={dummyRef}
      //   onPress={handleTooltipToggle}
      style={[styles.dummyContainer, { left, top, backgroundColor: bg }]}
    >
      <Text>{text}</Text>
      {tooltipVisible && (
        <Modal transparent visible onRequestClose={handleTooltipToggle}>
          <View style={[styles.modalContainer, { top: top - 10 }]}>
            <View style={styles.tooltip}>
              <Text style={styles.tooltipText}>Tooltip content</Text>
            </View>
          </View>
        </Modal>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dummyContainer: {
    position: "relative",
    padding: 10,
  },
  modalContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  tooltip: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
    elevation: 2,
  },
  tooltipText: {
    color: "#000",
  },
});
