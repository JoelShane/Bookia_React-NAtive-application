import * as React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

function LoginScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
      }}>
      <Text style={styles.head}>Bookia!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email here ....."
        placeholderTextColor="blue"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your Password here......."
        placeholderTextColor="blue"
      />
      <Button
        style={styles.btn}
        title="Log In"
        onPress={() => navigation.navigate('Dashboard')}
      />

      <View style={styles.space}></View>

      <Text>
        Don't you have an account?
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate('Register')}>
          Register
        </TouchableOpacity>
      </Text>
    </View>
  );
}

function Register({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
      }}>
      <Text style={styles.head1}>Register here..</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your first name...."
        placeholderTextColor="blue"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your last name...."
        placeholderTextColor="blue"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your phone number here...."
        placeholderTextColor="blue"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your email here...."
        placeholderTextColor="blue"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter a password here...."
        placeholderTextColor="blue"
      />

      <Button
        title="Register"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={styles.search}
        placeholder="Search here...."
        placeholderTextColor="black"
      />

      <TouchableOpacity
        style={styles.list}
        onPress={() => navigation.navigate('booklist')}>
        <View>
          <Image
            style={styles.listimg}
            source={{
              height: 200,
              width: 200,

              uri: 'https://bookkooks.com/wp-content/uploads/2018/11/100-best-books-of-all-time.png',
            }}
          />
        </View>
        <View style={styles.listtext}>
          <Text style={styles.litext}>Book Lists</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.space1}></View>

      <TouchableOpacity
        style={styles.list}
        onPress={() => navigation.navigate('Categories')}>
        <View>
          <Image
            style={styles.listimg1}
            source={{
              height: 200,
              width: 200,

              uri: 'https://assets.ltkcontent.com/images/31018/book-genres_0066f46bde.jpg',
            }}
          />
        </View>
        <View style={styles.listtext}>
          <Text style={styles.litext}>Categories</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function Booklist({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.catlit}>
        <Text style={styles.catlist1}>Book Lists</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('The Thirty-Nine Steps')}>
          <Text style={styles.catlist}>The Thirty-Nine Steps</Text>
        </TouchableOpacity>
        <View style={styles.space1}></View>

        <TouchableOpacity
          onPress={() => navigation.navigate('The Cretan Runner')}>
          <Text style={styles.catlist}>The Cretan Runner</Text>
        </TouchableOpacity>
        <View style={styles.space1}></View>

        <TouchableOpacity onPress={() => navigation.navigate('Fatherland')}>
          <Text style={styles.catlist}>Fatherland</Text>
        </TouchableOpacity>
        <View style={styles.space1}></View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Pride and Prejudice')}>
          <Text style={styles.catlist}>Pride and Prejudice</Text>
        </TouchableOpacity>
        <View style={styles.space1}></View>

        <TouchableOpacity
          onPress={() => navigation.navigate('To Kill a Mockingbird')}>
          <Text style={styles.catlist}>To Kill a Mockingbird</Text>
        </TouchableOpacity>
        <View style={styles.space1}></View>

        <TouchableOpacity
          onPress={() => navigation.navigate('The Great Gatsby')}>
          <Text style={styles.catlist}>The Great Gatsby</Text>
        </TouchableOpacity>
        <View style={styles.space1}></View>

        <TouchableOpacity
          onPress={() => navigation.navigate('A Passage to India')}>
          <Text style={styles.catlist}>A Passage to India</Text>
        </TouchableOpacity>
        <View style={styles.space1}></View>

        <TouchableOpacity onPress={() => navigation.navigate('Invisible Man')}>
          <Text style={styles.catlist}>Invisible Man</Text>
        </TouchableOpacity>
        <View style={styles.space1}></View>

        <TouchableOpacity onPress={() => navigation.navigate('Don Quixote')}>
          <Text style={styles.catlist}>Don Quixote</Text>
        </TouchableOpacity>
        <View style={styles.space1}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

function BookCategories({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.catlit}>
        <Text style={styles.catlist1}>Book Categories</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Action and Advanture')}>
          <Text style={styles.catlist}>Action and Adventure</Text>
        </TouchableOpacity>

        <View style={styles.space1}></View>

        <TouchableOpacity onPress={() => navigation.navigate('Classics')}>
          <Text style={styles.catlist}>Classics</Text>
        </TouchableOpacity>

        <View style={styles.space1}></View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Comic Book or Graphic Novel')}>
          <Text style={styles.catlist}>Comic Book or Graphic Novel</Text>
        </TouchableOpacity>
        <View style={styles.space1}></View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Detective and Mystery')}>
          <Text style={styles.catlist}>Detective and Mystery</Text>
        </TouchableOpacity>

        <View style={styles.space2}></View>

        <TouchableOpacity onPress={() => navigation.navigate('Fantasy')}>
          <Text style={styles.catlist}>Fantasy</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function Action({ navigation }) {
  return (
    <View style={styles.action}>
      <TouchableOpacity
        onPress={() => navigation.navigate('The Thirty-Nine Steps')}>
        <Text style={styles.catlist1}>The Thirty-Nine Steps</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('The Cretan Runner')}>
        <Text style={styles.catlist1}>The Cretan Runner</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Fatherland')}>
        <Text style={styles.catlist1}>Fatherland</Text>
      </TouchableOpacity>
    </View>
  );
}

function Classics({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Pride and Prejudice')}>
        <Text style={styles.catlist}>Pride and Prejudice </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('To Kill a Mockingbird')}>
        <Text style={styles.catlist}> To Kill a Mockingbird </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('The Great Gatsby')}>
        <Text style={styles.catlist}>The Great Gatsby</Text>
      </TouchableOpacity>
    </View>
  );
}

function Noval({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('A Passage to India')}>
        <Text style={styles.catlist}>A Passage to India</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Invisible Man')}>
        <Text style={styles.catlist}>Invisible Man</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Don Quixote')}>
        <Text style={styles.catlist}>Don Quixote</Text>
      </TouchableOpacity>
    </View>
  );
}

// Book's pages
// Action books

function Action1({ navigation }) {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <View>
          <Text style={styles.booktitle}>The Thirty-Nine Steps</Text>

          <View style={styles.space1}></View>

          <Image
            style={styles.listimg}
            source={{
              height: 200,
              width: 250,

              uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347634489l/2713421.jpg',
            }}
          />

          <Text style={styles.author}> by Scottish author John Buchan</Text>
          <View style={styles.space1}></View>
          <Text style={styles.para}>
            Adventurer Richard Hannay, just returned from South Africa, is
            thoroughly bored with London life—until he is accosted by a
            mysterious American, who warns him of an assassination plot that
            could completely destabalise the fragile political balance of
            Europe. Initially sceptical, Hannay nonetheless harbours the man—but
            one day returns home to find him murdered... An obvious suspect,
            Hannay flees to his native Scotland, pursued by both the police and
            a cunning, ruthless enemy. His life and the security of Britain are
            in grave peril, and everything rests on the solution to a baffling
            enigma: what are the 'thirty nine steps?'
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

function Action2({ navigation }) {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <View>
          <Text style={styles.booktitle}>The Cretan Runner</Text>

          <View style={styles.space1}></View>

          <Image
            style={styles.listimg}
            source={{
              height: 200,
              width: 250,

              uri: 'https://cdn.shopify.com/s/files/1/0726/9203/products/The_Cretan_Runner_1024x1024.jpg?v=1528394279',
            }}
          />

          <Text style={styles.author}> by George Psychoundakis </Text>
          <View style={styles.space1}></View>
          <Text style={styles.para}>
            George Psychoundakis was a twenty-one-year-old shepherd from the
            village of Asi Gonia when the battle of Crete began: “It was in May
            1941 that, all of a sudden, high in the sky, we heard the drone of
            many aeroplanes growing steadily closer.” The German parachutists
            soon outnumbered the British troops who were forced first to
            retreat, then to evacuate, before Crete fell to the Germans. So
            began the Cretan Resistance and the young shepherd’s career as a
            wartime runner. In this unique account of the Resistance,
            Psychoundakis records the daily life of his fellow Cretans, his
            treacherous journeys on foot from the eastern White Mountains to the
            western slopes of Mount Ida to transmit messages and transport
            goods, and his enduring friendships with British officers (like his
            eventual translator Patrick Leigh Fermor) whose missions he helped
            to carry out with unflagging courage, energy, and good humor.
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

function Action3({ navigation }) {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <View>
          <Text style={styles.booktitle}>Fatherland</Text>

          <View style={styles.space1}></View>

          <Image
            style={styles.listimg}
            source={{
              height: 200,
              width: 250,

              uri: 'https://cdn.shopify.com/s/files/1/0726/9203/products/The_Cretan_Runner_1024x1024.jpg?v=1528394279',
            }}
          />

          <Text style={styles.author}> by Robert Harris </Text>
          <View style={styles.space1}></View>
          <Text style={styles.para}>
            Fatherland is set in an alternative world where Hitler has won the
            Second World War. It is April 1964 and one week before Hitler's 75th
            birthday. Xavier March, a detective of the Kriminalpolizei, is
            called out to investigate the discovery of a dead body in a lake
            near Berlin's most prestigious suburb. As March discovers the
            identity of the body, he uncovers signs of a conspiracy that could
            go to the very top of the German Reich. And, with the Gestapo just
            one step behind, March, together with an American journalist, is
            caught up in a race to discover and reveal the truth - a truth that
            has already killed, a truth that could topple governments, a truth
            that will change history
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

// Classic books

function Classic1({ navigation }) {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <View>
          <Text style={styles.booktitle}>Fatherland</Text>

          <View style={styles.space1}></View>

          <Image
            style={styles.listimg}
            source={{
              height: 200,
              width: 250,

              uri: 'https://cdn.shopify.com/s/files/1/0726/9203/products/The_Cretan_Runner_1024x1024.jpg?v=1528394279',
            }}
          />

          <Text style={styles.author}> by Robert Harris </Text>
          <View style={styles.space1}></View>
          <Text style={styles.para}>
            Fatherland is set in an alternative world where Hitler has won the
            Second World War. It is April 1964 and one week before Hitler's 75th
            birthday. Xavier March, a detective of the Kriminalpolizei, is
            called out to investigate the discovery of a dead body in a lake
            near Berlin's most prestigious suburb. As March discovers the
            identity of the body, he uncovers signs of a conspiracy that could
            go to the very top of the German Reich. And, with the Gestapo just
            one step behind, March, together with an American journalist, is
            caught up in a race to discover and reveal the truth - a truth that
            has already killed, a truth that could topple governments, a truth
            that will change history
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

function Classic3({ navigation }) {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <View>
          <Text style={styles.booktitle}>The Great Gatsby</Text>

          <View style={styles.space1}></View>

          <Image
            style={styles.listimg}
            source={{
              height: 200,
              width: 250,

              uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg',
            }}
          />

          <Text style={styles.author}> by F. Scott Fitzgerald</Text>
          <View style={styles.space1}></View>
          <Text style={styles.para}>
            In the spring of 1957, a 31-year-old aspiring novelist named Harper
            Lee — everyone called her Nelle — delivered the manuscript for “Go
            Set a Watchman” to her agent to send out to publishers, including
            the now-defunct J. B. Lippincott Company, which eventually bought
            it. At Lippincott, the novel fell into the hands of Therese von
            Hohoff Torrey — known professionally as Tay Hohoff — a small, wiry
            veteran editor in her late 50s. Ms. Hohoff was impressed. “[T]he
            spark of the true writer flashed in every line,” she would later
            recount in a corporate history of Lippincott. But as Ms. Hohoff saw
            it, the manuscript was by no means fit for publication. It was, as
            she described it, “more a series of anecdotes than a fully conceived
            novel.” During the next couple of years, she led Ms. Lee from one
            draft to the next until the book finally achieved its finished form
            and was retitled “To Kill a Mockingbird.” Now, this week’s
            publication of “Go Set a Watchman” offers a rare glimpse at the
            before and after of a book widely regarded as a masterpiece. The
            main characters may be the same, but “Watchman” is an entirely
            different book in both shape and tone from “Mockingbird.” Scout is
            not an impressionable child in Maycomb, Ala., looking up to her
            heroic father, but a young woman from Maycomb living in New York.
            Her father, the great Atticus Finch, is a bigot.
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

function Classic2({ navigation }) {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <View>
          <Text style={styles.booktitle}>To Kill a Mockingbird</Text>

          <View style={styles.space1}></View>

          <Image
            style={styles.listimg}
            source={{
              height: 200,
              width: 250,

              uri: 'https://www.penguin.co.uk/content/dam/prh/books/108/1088099/9781784752637.jpg',
            }}
          />

          <Text style={styles.author}> by Harper Lee </Text>
          <View style={styles.space1}></View>
          <Text style={styles.para}>
            In the spring of 1957, a 31-year-old aspiring novelist named Harper
            Lee — everyone called her Nelle — delivered the manuscript for “Go
            Set a Watchman” to her agent to send out to publishers, including
            the now-defunct J. B. Lippincott Company, which eventually bought
            it. At Lippincott, the novel fell into the hands of Therese von
            Hohoff Torrey — known professionally as Tay Hohoff — a small, wiry
            veteran editor in her late 50s. Ms. Hohoff was impressed. “[T]he
            spark of the true writer flashed in every line,” she would later
            recount in a corporate history of Lippincott. But as Ms. Hohoff saw
            it, the manuscript was by no means fit for publication. It was, as
            she described it, “more a series of anecdotes than a fully conceived
            novel.” During the next couple of years, she led Ms. Lee from one
            draft to the next until the book finally achieved its finished form
            and was retitled “To Kill a Mockingbird.” Now, this week’s
            publication of “Go Set a Watchman” offers a rare glimpse at the
            before and after of a book widely regarded as a masterpiece. The
            main characters may be the same, but “Watchman” is an entirely
            different book in both shape and tone from “Mockingbird.” Scout is
            not an impressionable child in Maycomb, Ala., looking up to her
            heroic father, but a young woman from Maycomb living in New York.
            Her father, the great Atticus Finch, is a bigot.
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

// Noval books

function Noval1({ navigation }) {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <View>
          <Text style={styles.booktitle}>A Passage To India</Text>

          <View style={styles.space1}></View>

          <Image
            style={styles.listimg}
            source={{
              height: 200,
              width: 250,

              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1h_9mBvkRDZqdGAcxeGnlOw6lj2XyYhg7Dw&usqp=CAU',
            }}
          />

          <Text style={styles.author}> by E.M.Forester </Text>
          <View style={styles.space1}></View>
          <Text style={styles.para}>
            When Adela Quested and her elderly companion Mrs Moore arrive in the
            Indian town of Chandrapore, they quickly feel trapped by its insular
            and prejudiced 'Anglo-Indian' community. Determined to escape the
            parochial English enclave and explore the 'real India', they seek
            the guidance of the charming and mercurial Dr Aziz, a cultivated
            Indian Muslim. But a mysterious incident occurs while they are
            exploring the Marabar caves with Aziz, and the well-respected doctor
            soon finds himself at the centre of a scandal that rouses violent
            passions among both the British and their Indian subjects. A
            masterful portrait of a society in the grip of imperialism, A
            Passage to India compellingly depicts the fate of individuals caught
            between the great political and cultural conflicts of the modern
            world. In his introduction, Pankaj Mishra outlines Forster's complex
            engagement with Indian society and culture. This edition reproduces
            the Abinger text and notes, and also includes four of Forster's
            essays on India, a chronology and further reading.
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

function Noval2({ navigation }) {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <View>
          <Text style={styles.booktitle}>Invisible Man</Text>

          <View style={styles.space1}></View>

          <Image
            style={styles.listimg}
            source={{
              height: 200,
              width: 250,

              uri: 'data:image/jpeg;base64,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',
            }}
          />

          <Text style={styles.author}> by Ralph Elison </Text>
          <View style={styles.space1}></View>
          <Text style={styles.para}>
            First published in 1952 and immediately hailed as a masterpiece,
            Invisible Man is one of those rare novels that have changed the
            shape of American literature. For not only does Ralph Ellison's
            nightmare journey across the racial divide tell unparalleled truths
            about the nature of bigotry and its effects on the minds of both
            victims and perpetrators, it gives us an entirely new model of what
            a novel can be. As he journeys from the Deep South to the streets
            and basements of Harlem, from a horrifying "battle royal" where
            black men are reduced to fighting animals, to a Communist rally
            where they are elevated to the status of trophies, Ralph Ellison's
            nameless protagonist ushers readers into a parallel universe that
            throws our own into harsh and even hilarious relief. Suspenseful and
            sardonic, narrated in a voice that takes in the symphonic range of
            the American language, black and white, Invisible Man is one of the
            most audacious and dazzling novels of our century.
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

function Noval3({ navigation }) {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <View>
          <Text style={styles.booktitle}>Don Quixote</Text>

          <View style={styles.space1}></View>

          <Image
            style={styles.listimg}
            source={{
              height: 200,
              width: 250,

              uri: 'data:image/jpeg;base64,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',
            }}
          />

          <Text style={styles.author}> by E.M.Forester </Text>
          <View style={styles.space1}></View>
          <Text style={styles.para}>
            When Adela Quested and her elderly companion Mrs Moore arrive in the
            Indian town of Chandrapore, they quickly feel trapped by its insular
            and prejudiced 'Anglo-Indian' community. Determined to escape the
            parochial English enclave and explore the 'real India', they seek
            the guidance of the charming and mercurial Dr Aziz, a cultivated
            Indian Muslim. But a mysterious incident occurs while they are
            exploring the Marabar caves with Aziz, and the well-respected doctor
            soon finds himself at the centre of a scandal that rouses violent
            passions among both the British and their Indian subjects. A
            masterful portrait of a society in the grip of imperialism, A
            Passage to India compellingly depicts the fate of individuals caught
            between the great political and cultural conflicts of the modern
            world. In his introduction, Pankaj Mishra outlines Forster's complex
            engagement with Indian society and culture. This edition reproduces
            the Abinger text and notes, and also includes four of Forster's
            essays on India, a chronology and further reading.
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c7cbef',
            width: 240,
          },
        }}>
        <Drawer.Screen name="Dashboard" component={HomeScreen} />
        <Drawer.Screen name="booklist" component={Booklist} />
        <Drawer.Screen name="Categories" component={BookCategories} />
        <Drawer.Screen name="Action and Advanture" component={Action} />
        <Drawer.Screen name="The Thirty-Nine Steps" component={Action1} />
        <Drawer.Screen name="The Cretan Runner" component={Action2} />
        <Drawer.Screen name="Fatherland" component={Action3} />

        <Drawer.Screen name="Classics" component={Classics} />
        <Drawer.Screen name="Pride and Prejudice" component={Classic1} />
        <Drawer.Screen name="To Kill a Mockingbird" component={Classic2} />
        <Drawer.Screen name="The Great Gatsby" component={Classic3} />

        <Drawer.Screen name="Comic Book or Graphic Novel" component={Noval} />
        <Drawer.Screen name="A Passage to India" component={Noval1} />
        <Drawer.Screen name="Invisible Man" component={Noval2} />
        <Drawer.Screen name="Don Quixote" component={Noval3} />

        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  btn: {
    marginBottom: 40,
    fontSize: 10,
  },

  space: {
    marginBottom: 100,
  },

  space1: {
    marginBottom: 50,
  },
  space2: {
    marginBottom: 20,
  },

  input: {
    width: '80%',
    height: '8%',
    borderRadius: 30,
    backgroundColor: 'white',
    paddingLeft: 40,
    marginBottom: 20,
    alignContent: 'left',
  },
  head: {
    marginBottom: 100,
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'blue',
  },
  head1: {
    marginBottom: 60,
    fontSize: 37,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'blue',
  },

  register: {
    color: 'blue',
    fontVariant: 'bold',
  },
  list: {
    right: 30,
    top: 40,
  },
  listimg: {
    borderRadius: 10,
    left: 40,
  },
  listtext: {
    padding: 10,
    left: 85,
  },
  litext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listimg1: {
    borderRadius: 10,
    left: 40,
    top: 5,
  },
  search: {
    borderColor: 'black',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 2,
    height: 35,
    width: 250,
    marginLeft: 20,
    textAlign: 'center',
    color: 'blue',
  },

  catlist: {
    width: 325,
    height: 80,
    borderRadius: 20,
    backgroundColor: 'lightblue',
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
  },
  catlist1: {
    width: 325,
    height: 120,
    borderRadius: 20,
    backgroundColor: 'gray',
    color: 'white',
    marginBottom: 60,
    textAlign: 'center',
    fontSize: 30,
    marginTop: 15,
  },
  action: {
    backgroundColor: '#c7cbef',
  },

  booktitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  author: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  para: {
    padding: 25,
  },
});


