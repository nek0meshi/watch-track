interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/50 flex justify-center items-center h-screen">
      <div className="loading loading-spinner loading-lg" />
    </div>
  );
};

export default Loading;
