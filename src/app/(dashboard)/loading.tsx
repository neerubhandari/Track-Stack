import { Loader } from "lucide-react";

const DashboardLoading = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <Loader className="animate-spin text-muted-foreground size-6" />
    </div>
  );
};
export default DashboardLoading;
