export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-6">GiltMedia</h1>
          <p className="text-xl mb-8">Professional Media Services</p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Photography</h3>
              <p>Professional photography services for all occasions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Videography</h3>
              <p>High-quality video production and editing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Design</h3>
              <p>Creative design solutions for your brand</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}