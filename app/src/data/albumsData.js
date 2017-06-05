import ImageOne from '../images/imageOne.jpg';
import ImageTwo from '../images/imageTwo.jpg';

let id = 1;
let newId = () => (id++).toString();

const albums = [
    { 
        title: 'Norman Seeff',
        pictures: [
            { 
            title: 'Michael Jackson & Diana Ross, 1982',
            description: 'Diana asked for this shoot and what really struck me with this session was the tender relationship between Diana and Michael. I’d worked with Michael before and found him to be very shy and quiet. Shooting with Diana though, he was clearly more comfortable and open with her there; it was really adorable to see what happened between them -Norman Seeff',
            url: 'http://home.mj-upbeat.com/wp-content/uploads/2013/10/111yyyyu765r6.jpg',
            },
            { 
            title: 'Steve Jobs, Woodside, CA, 1984',
            description: `“Sent by Rolling Stone to shoot a tech company with an atypical approach in 1984, Seeff began shooting group shots of ‘this commune of kids’ at Apple, Inc. Eventually, he managed to get one-on-one time with the company's 28-year-old millionaire co-founder. ‘We were sitting on the floor, drinking beer and chatting,’ he says, ‘and at one point, he ran out and came back with this computer – which I'd never seen at that point – then plopped down into this lotus pose and put it into his lap.`,
            url:'https://cdn.pursuitist.com/wp-content/uploads/2011/11/Iconic-Images-of-Steve-Jobs-by-Photographer-Norman-Seeff.jpg',
        },
        {
        title: 'Ray Charles, Los Angeles, 1985',
            description: `“When Ray first arrived, he was very terse with me. Then I sat him down and asked, ‘When did you first know that you had a voice?’ And suddenly he was incredibly excited about the conversation. As we were talking, his fingers just couldn’t leave the piano, and he was literally composing pieces using our dialogue. In the end, he ended up calling me ‘brother.’ This piece became the benchmark for me.” – Norman Seeff, from an interview with Lenora Jane Estes, Vanity Fair, 9.12.13`,
            url:'http://3.bp.blogspot.com/-2Wf8fjiemT8/Tr_EgZ8z0TI/AAAAAAAALDc/kZwYyTxkbOw/s1600/Studio+-+Portrait%252C+Ray+Charles%252C+%2528c%2529+Norman+Seeff+3+-+1985.jpg',
            },
        ],
        _id: 400
    },
    {title: 'Bill Cunningham',
        pictures: [
            { 
            title: 'The Regulars',
            description: 'There was a group of stylish people who would gather on the corner of Fifth Avenue and 57th Street, at what is now known as Bill Cunningham Corner. He would start photographing each person because of what they had put together to dress themselves, or as he would call it, “their armor.” He was struck that they were so creatively dressed on their way to work at 9:30 in the morning. Over the years, they developed a friendship.',
            url: `https://static01.nyt.com/images/2016/12/18/fashion/18BILL-CREW/18BILL-CREW-superJumbo.jpg`,
            },
            { 
            title: 'The Bryant Park Fountain',
            description: 'Bill loved documenting the Bryant Park fountain. In the winter, he would photograph it daily, sometimes multiple times a day, so he could get the perfect photo of it turning into a block of ice. We have so many photos of it that I got lost on which photo was from which day. In the spring, when the ice started to melt, Bill would walk by every day to capture that. I think he was amazed by how nature took over. It was beautiful to him.',
            url:'https://static01.nyt.com/images/2016/12/18/fashion/18BILL-FOUNTAIN/18BILL-FOUNTAIN-superJumbo.jpg',
        },
        {
            title: 'Women With Flowers',
            description: `Every Saturday, Bill would go to the Union Square farmers’ market to see what people were wearing, and which flowers they chose. He would often find people’s clothes matching the flowers they were picking out. That was his Saturday morning ritual until the very end.`,
            url:'https://static01.nyt.com/images/2016/12/18/fashion/18BILL-WOMENFLOWERS/18BILL-WOMENFLOWERS-superJumbo.jpg',
        }
        ],
        _id: 500
    },
    {title: 'Annie Leibovitz',
        pictures: [
            { 
            title: 'President Barack Obama – 2006',
            description: 'This portrait of President Barack Obama and his family was featured in Vogue’s September 2007 issue. Leibovitz photographed the First Family back in 2008 when President Obama was serving as the junior senator of Illinois.',
            url:`http://therichest3.imgix.net/wp-content/uploads/2014/05/obamas-via-vogue.png?auto=format&cs=tinysrgb&q=100&w=800&h=600&fit=crop&dpr=1.5`,
            
            },
            { 
            title: 'Lindsey Vonn – 2013',
            description: 'Leibovitz was able to capture the true essence of Olympic skier, Lindsey Vonn with this Narciso Rodriguez, silk dress caught up in the air. Vonn was featured in Vogue’s August 2013 issue, discussing her recovery from her crash at the world championships earlier that year and her relationship with Tiger Woods.',
            url: `http://therichest3.imgix.net/wp-content/uploads/2014/05/vonn-via-vogue.png?auto=format&cs=tinysrgb&q=100&w=800&h=600&fit=crop&dpr=1.5`,
            
        },
        { 
            title: 'Leonardo DiCaprio – 1998',
            description: 'Leonardo Dicaprio was photographed by Leibovitz for Vanity Fair’s January 1998 issue. The actor was just beginning to embrace his heartthrob status with the release of Titanic a month prior.',
            url:`http://anotherimg.dazedgroup.netdna-cdn.com/1050/azure/another-prod/280/3/283698.jpg`,
            
            },
        ],
        _id: 600
    }
  
]

export default {
  get() {
    return Promise.resolve(albums)
  },

  getAlbums() {
    return Promise.resolve(albums.slice());
  },

  getAlbumById(id) {
    return Promise.resolve(albums.find(album => {
        return album._id.toString() === id;
    }));
  },

  newAlbumToDb(album) {
    const saved = {
      ...album,
      _id: newId()
    }
    return Promise.resolve(saved);
  },
  removeAlbums(id) {
    const index = albums.findIndex(i => i._id === id);
    if (index > -1) albums.splice(index, 1);
    return Promise.resolve(index !== -1);
  },

  addPictureToAlbum(image) {
    const saved = {
        ...image,
        _id: newId()
    }
    return Promise.resolve(image);
  },

  removePicFromAlbum(image) {
    const saved = {
        ...image,
        _id: newId()
    }
    return Promise.resolve(image);
  }
}