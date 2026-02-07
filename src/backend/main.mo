import List "mo:core/List";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type News = {
    title : Text;
    description : Text;
    time : Time.Time;
  };

  let news = List.empty<News>();

  public shared ({ caller }) func publishNews(title : Text, description : Text) : async () {
    let newsItem : News = {
      title;
      description;
      time = Time.now();
    };
    news.add(newsItem);
  };

  public shared ({ caller }) func removeNews(title : Text) : async () {
    let filteredNewsIter = news.values().filter(
      func(news) {
        news.title != title;
      }
    );
    news.clear();
    for (filteredNews in filteredNewsIter) {
      news.add(filteredNews);
    };
  };

  public query ({ caller }) func getAllNews() : async [News] {
    news.reverse().toArray();
  };
};
