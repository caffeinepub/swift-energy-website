import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import MixinStorage "blob-storage/Mixin";


// Use migration to update legacy deployments that used immutable lists

actor {
  include MixinStorage();

  type News = {
    title : Text;
    description : Text;
    time : Time.Time;
  };

  let news = Map.empty<Text, News>();

  public shared ({ caller }) func publishNews(title : Text, description : Text, timestamp : Time.Time) : async () {
    let newsItem : News = {
      title;
      description;
      time = timestamp;
    };
    news.add(title, newsItem);
  };

  public shared ({ caller }) func removeNews(title : Text) : async () {
    news.remove(title);
  };

  public query ({ caller }) func getAllNews() : async [News] {
    news.values().toArray();
  };
};
