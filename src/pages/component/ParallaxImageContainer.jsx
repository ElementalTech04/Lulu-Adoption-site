const ParallaxImageContainer = ({children}) => {
    return (
        <div>
            {/* Parallax Image Section */}
            <div className="relative h-screen overflow-hidden">
                {children}
            </div>
        </div>
    )
}