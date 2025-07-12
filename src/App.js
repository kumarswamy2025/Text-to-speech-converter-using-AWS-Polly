import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import AWS from 'aws-sdk';
import {toast, Toaster} from 'react-hot-toast'; 

// calling aws polly
const polly = new AWS.Polly();
function App() {
  const [text, setText] = useState("");
  const [audioFile, setAudioFile] = useState();

  const convertTextToSpeech = () => {
    polly.synthesizeSpeech(
      {
        Text: text,
        OutputFormat: "mp3",
        VoiceId: "Salli",
      },
      (error, data) => {
        if (error) {
          //console.log(error);
          toast.error("Something went wrong!");
        } else {
          //console.log(data);
          setAudioFile(data);
          // Show toast notification on successful conversion
          toast.success("Text converted to speech successfully!");
        }
      }
    );
  };
  return (
    <div className="container">
      <Header />
      <Section
        text={text}
        setText={setText}
        convertTextToSpeech={convertTextToSpeech}
      />
    </div>
  );
}

export default App;
