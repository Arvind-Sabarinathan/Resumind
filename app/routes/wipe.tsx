import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

const Wipe = () => {
  const { auth, isLoading, error, fs, kv } = usePuterStore();
  const navigate = useNavigate();
  const [files, setFiles] = useState<FSItem[]>([]);

  const loadFiles = async () => {
    const files = (await fs.readDir("./")) as FSItem[];
    setFiles(files);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate("/auth?next=/wipe");
    }
  }, [isLoading]);

  const handleDelete = async () => {
    files.forEach(async (file) => {
      await fs.delete(file.path);
    });
    await kv.flush();
    loadFiles();
  };

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[url('/images/bg-main.svg')] bg-cover">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-600 border-t-transparent"></div>
          <p className="font-medium text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[url('/images/bg-main.svg')] bg-cover">
        <div className="flex max-w-md flex-col items-center gap-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Error Encountered
          </h3>
          <p className="text-center text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover pt-0!">
      <nav className="resume-nav">
        <Link to="/" className="back-button">
          <img src="/icons/back.svg" alt="Back" className="h-2.5 w-2.5" />
          <span className="text-sm font-semibold text-gray-800">
            Back to Home
          </span>
        </Link>
      </nav>

      <section className="main-section">
        <div className="page-heading">
          <h1>Wipe App Data</h1>
          <h2>Clear all your data and start fresh</h2>
        </div>

        <div className="flex w-full max-w-2xl flex-col gap-8 rounded-2xl bg-white p-8 shadow-sm">
          <div className="flex items-center gap-2 text-lg text-gray-600">
            <span>Authenticated as:</span>
            <span className="font-semibold text-gray-900">
              {auth.user?.username}
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Existing files ({files.length})
            </h3>
            <div className="flex max-h-[300px] flex-col gap-2 overflow-y-auto rounded-xl border border-gray-100 p-4">
              {files.length === 0 ? (
                <p className="text-center text-gray-500">No files found</p>
              ) : (
                files.map((file) => (
                  <div
                    key={file.id}
                    className="flex flex-row items-center gap-3 rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      📄
                    </div>
                    <p className="font-medium text-gray-700">{file.name}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              className="cursor-pointer rounded-full bg-red-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-red-600 hover:shadow-red-200"
              onClick={() => handleDelete()}
            >
              Wipe App Data
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Wipe;
