export default function Sidebar(){
    return (
        <aside className="w-64 bg-white p-6 shadow">
            <h1 className="text-xl font-bold mb-15">JobNova</h1>
            <nav className="space-y-4">
                <p className="font-medium text-purple-600">Jobs</p>
                <p className="text-gray-500">AI Mock Interview</p>
                <p className="text-gray-500">Resume</p>
                <p className="text-gray-500">Profile</p>
                <p className="text-gray-500">Setting</p>
                <p className="text-gray-500">Subscription</p>
                <p className="text-gray-500">Extra Credits</p>
            </nav>
        </aside>
    );
}