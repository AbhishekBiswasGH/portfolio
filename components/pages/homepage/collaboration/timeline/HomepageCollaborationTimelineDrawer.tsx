// components
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import HomepageCollaborationTimelineContent from "./HomepageCollaborationTimelineContent";

export default function HomepageCollaborationTimelineDrawer() {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger
        asChild
        className={"sm:hidden"}
      >
        <button className="h-full w-full" />
      </DrawerTrigger>
      <DrawerContent className="min-h-[95dvh] min-w-fit gap-0 rounded-none border-none bg-transparent p-0 outline-none sm:hidden">
        <DrawerTitle className="hidden" />
        <DrawerDescription className="hidden" />
        <HomepageCollaborationTimelineContent />
      </DrawerContent>
    </Drawer>
  );
}
