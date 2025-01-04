const Drum1 = () => {
    const playAudio = (id) => {
        const audio = document.getElementById(id);
        if (audio) {
            audio.play();
        }
        playMessage(id);
    };

    const handleKeyDown = (e) => {
        const key = e.key.toUpperCase();
        playAudio(key);
    };
    const playMessage = (id) => {
        const messageDiv = document.getElementById("display");
        const button = document.querySelector(`button .clip[id="${id}"]`);
        if (!button) {
            messageDiv.innerText = "No music found";
            return;
        }
        messageDiv.innerText = `${button.parentElement.id} has been played`;
    };

    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div id="drum-machine">
            <h1>Drum Machine</h1>
            <div id="display"></div>
            <button className="drum-pad" id="Heater1" onClick={() => playAudio('Q')}>
                Q
                <audio
                    className="clip"
                    id="Q"
                    src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
                />
            </button>
            <button className="drum-pad" id="Heater2" onClick={() => playAudio('W')}>
                W
                <audio
                    className="clip"
                    id="W"
                    src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
                />
            </button>
            <button className="drum-pad" id="Heater3" onClick={() => playAudio('E')}>
                E
                <audio
                    className="clip"
                    id="E"
                    src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
                />
            </button>
            <button className="drum-pad" id="Heater4" onClick={() => playAudio('A')}>
                A
                <audio
                    className="clip"
                    id="A"
                    src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
                />
            </button>
            <button className="drum-pad" id="Clap" onClick={() => playAudio('S')}>
                S
                <audio
                    className="clip"
                    id="S"
                    src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
                />
            </button>
            <button className="drum-pad" id="Open-HH" onClick={() => playAudio('D')}>
                D
                <audio
                    className="clip"
                    id="D"
                    src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
                />
            </button>
            <button className="drum-pad" id="Kick-n'-Hat" onClick={() => playAudio('Z')}>
                Z
                <audio
                    className="clip"
                    id="Z"
                    src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
                />
            </button>
            <button className="drum-pad" id="Kick" onClick={() => playAudio('X')}>
                X
                <audio
                    className="clip"
                    id="X"
                    src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
                />
            </button>
            <button className="drum-pad" id="Closed-HH" onClick={() => playAudio('C')}>
                C
                <audio
                    className="clip"
                    id="C"
                    src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
                />
            </button>
        </div>
    );
};

ReactDOM.render(<Drum1 />, document.getElementById('root'));