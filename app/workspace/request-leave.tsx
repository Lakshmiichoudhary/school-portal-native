import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";
import { Picker } from "@react-native-picker/picker";

export default function RequestLeave() {
  const [recipient, setRecipient] = useState("");
  const [days, setDays] = useState("");
  const [reason, setReason] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);

  const pickFile = async () => {};

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <BackButton />
        <Text style={styles.title}>Request Leave</Text>

        {/* Recipient */}
        <View>
          <Text style={styles.label}>Select Recipient*</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={recipient}
              onValueChange={setRecipient}
              style={styles.picker}
              dropdownIconColor="#484848"
            >
              <Picker.Item label="Select Recipient" value="" />
              <Picker.Item label="Principal" value="principal" />
              <Picker.Item label="Admin" value="admin" />
            </Picker>
          </View>
        </View>

        <View>
          <Text style={styles.label}>Select number of days*</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={days}
              onValueChange={setDays}
              style={styles.picker}
              dropdownIconColor="#484848"
            >
              <Picker.Item label="Select Days" value="" />
              <Picker.Item label="1 Day" value="1" />
              <Picker.Item label="2 Days" value="2" />
              <Picker.Item label="3+ Days" value="3+" />
            </Picker>
          </View>
        </View>

        {/* Reason */}
        <View>
          <Text style={styles.label}>Purpose of leave*</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter reason for leave"
            placeholderTextColor="#9A9A9A"
            multiline
            value={reason}
            onChangeText={setReason}
          />
        </View>

        {/* Attachment */}
        <View>
          <Text style={styles.label}>Add Attachment (if any)</Text>
          <Pressable style={styles.attachment} onPress={pickFile}>
            <Text style={styles.attachmentText}>
              {fileName ?? "Choose file"}
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>

      {/* Send Button */}
      <View style={styles.footer}>
        <Pressable style={styles.sendButton}>
          <Text style={styles.sendText}>Send Request</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#1A1A1A",
  },

  label: {
    fontSize: 14,
    color: "#484848",
    marginBottom: 6,
    fontWeight: "600",
  },

  pickerWrapper: {
    height: 52,
    borderWidth: 1,
    borderColor: "#B8B8B8",
    borderRadius: 12,
    justifyContent: "center",
    backgroundColor: "#FFF",
    overflow: "hidden",
  },

  picker: {
    height: 52,
    backgroundColor: "transparent",
  },

  textArea: {
    borderWidth: 1,
    borderColor: "#B8B8B8",
    borderRadius: 12,
    padding: 16,
    minHeight: 100,
    textAlignVertical: "top",
    backgroundColor: "#FFF",
  },

  attachment: {
    height: 52,
    width: 160,
    borderRadius: 12,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "#E9EFFD",
  },

  attachmentText: {
    fontSize: 16,
    color: "#225AD6",
    fontWeight: "500",
    textAlign: "center",
  },

  footer: {
    padding: 24,
  },

  sendButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: "#225AD6",
    justifyContent: "center",
    alignItems: "center",
  },

  sendText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
