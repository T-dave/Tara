import {
    SafeAreaView,
    SafeAreaViewProps,
} from "react-native-safe-area-context";
import { ThemedView } from "./themed-view";
import Top from "./top";

interface ContainerProps extends SafeAreaViewProps {
  title?: string;
  back?: boolean;
  search?: boolean;
}
export default function Container({
  title,
  back,
  search,
  style,
  children,
}: ContainerProps) {
  return (
    <ThemedView>
      <SafeAreaView>
        <Top title={title} back={back} search={search} />
        <ThemedView lightColor="#F9F9F9" style={{minHeight:'100%'}}>{children}</ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}
