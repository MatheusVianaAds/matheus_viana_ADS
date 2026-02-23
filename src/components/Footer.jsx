
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black-gradient py-16">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">

                <div className="flex gap-8 text-blue-500">

                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <svg
                            className="w-9 h-9 hover:scale-110 transition"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.75 2C4.13 2 2 4.13 2 7.75v8.5C2 19.87 4.13 22 7.75 22h8.5C19.87 22 22 19.87 22 16.25v-8.5C22 4.13 19.87 2 16.25 2h-8.5zm0 2h8.5C18.43 4 20 5.57 20 7.75v8.5C20 18.43 18.43 20 16.25 20h-8.5C5.57 20 4 18.43 4 16.25v-8.5C4 5.57 5.57 4 7.75 4zm4.25 3.5a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm0 2a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm4.5-.88a1.12 1.12 0 100 2.25 1.12 1.12 0 000-2.25z" />
                        </svg>
                    </a>

                    {/* Facebook */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <svg
                            className="w-9 h-9 hover:scale-110 transition"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.02 3.66 9.19 8.44 9.93v-7.03H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.9h-2.33v7.03C18.34 21.19 22 17.02 22 12c0-5.52-4.48-10-10-10z" />
                        </svg>
                    </a>

                    {/* WhatsApp */}
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                        <svg
                            className="w-9 h-9 hover:scale-110 transition"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.52 3.48A11.91 11.91 0 0012.05 0C5.45 0 .07 5.38.07 12c0 2.11.55 4.17 1.6 6L0 24l6.2-1.62a11.9 11.9 0 005.85 1.49h.01c6.6 0 11.98-5.38 11.98-12 0-3.2-1.25-6.21-3.52-8.48zM12.06 21.6h-.01a9.6 9.6 0 01-4.9-1.35l-.35-.21-3.68.96.98-3.59-.23-.37a9.56 9.56 0 01-1.48-5.04c0-5.3 4.31-9.61 9.61-9.61 2.57 0 4.99 1 6.8 2.81a9.56 9.56 0 012.81 6.8c0 5.3-4.31 9.6-9.6 9.6zm5.27-7.2c-.29-.15-1.72-.85-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.94 1.13-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.34.43-.5.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.7.63.71.22 1.35.19 1.86.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.35z" />
                        </svg>
                    </a>

                </div>

                <p className="text-gray-400 text-center">
                    Todos os direitos reservados © Matheus Viana {currentYear}
                </p>
            </div>
        </footer>
    );

}

export default Footer