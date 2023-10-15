import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import useApi from "../hooks/useApi";
//import "./Home.css";

const Home: React.FC = () => {
	const { searchData } = useApi();

	const [serchTerm, setSearchTerm] = useState("");
	const [type, setType] = useState("");
	const [results, setResults] = useState("");

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				HELLO WORLD
			</IonContent>
		</IonPage>
	);
};

export default Home;
