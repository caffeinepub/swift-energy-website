import { useReducer } from 'react';
import { Plus, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import ImageSlider from '@/components/ImageSlider';
import { useGetAllNews, usePublishNews, useRemoveNews } from '@/hooks/useNews';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { validateAndConvertDate } from '@/utils/newsDate';
import { flowReducer, initialFlowState } from './newsManagementFlow';

const CORRECT_PIN = '93023';

export default function NewsPage() {
  const [flowState, dispatch] = useReducer(flowReducer, initialFlowState);

  const { data: newsList = [], isLoading } = useGetAllNews();
  const publishNews = usePublishNews();
  const removeNews = useRemoveNews();

  const sliderImages = [
    { src: '/assets/swift banner.jpeg', alt: 'Swift Energy Banner' },
    { src: '/assets/IMG-20260120-WA0066.jpg', alt: 'Team Photo 1' },
    { src: '/assets/IMG-20260124-WA0020.jpg', alt: 'Team Photo 2' },
  ];

  // Handlers
  const handlePlusClick = () => {
    dispatch({ type: 'START_FLOW' });
  };

  const handlePinSubmit = () => {
    dispatch({ type: 'SUBMIT_PIN', pin: flowState.pin, correctPin: CORRECT_PIN });
  };

  const handlePinKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      handlePinSubmit();
    }
  };

  const handleAddNewsClick = () => {
    dispatch({ type: 'OPEN_ADD' });
  };

  const handleRemoveNewsClick = () => {
    dispatch({ type: 'OPEN_REMOVE' });
  };

  const handleFormSubmit = async () => {
    const { month, day, year, title, description } = flowState;

    if (!month || !day || !year || !title || !description) {
      dispatch({ type: 'SET_FORM_ERROR', error: 'Please fill in all fields.' });
      return;
    }

    // Validate and convert the date
    const dateResult = validateAndConvertDate(month, day, year);
    if (!dateResult.valid) {
      dispatch({ type: 'SET_FORM_ERROR', error: dateResult.error || 'Invalid date.' });
      return;
    }

    try {
      await publishNews.mutateAsync({ 
        title, 
        description, 
        timestamp: dateResult.timestamp! 
      });
      
      // Reset form and close
      dispatch({ type: 'RESET_FORM' });
      dispatch({ type: 'CLOSE_FLOW' });
    } catch (error) {
      dispatch({ type: 'SET_FORM_ERROR', error: 'Failed to publish news article. Please try again.' });
    }
  };

  const handleRemoveSubmit = async () => {
    if (!flowState.selectedNewsToRemove) {
      dispatch({ type: 'SET_REMOVE_ERROR', error: 'Please select a news article to remove.' });
      return;
    }

    try {
      await removeNews.mutateAsync(flowState.selectedNewsToRemove);
      dispatch({ type: 'RESET_REMOVE' });
      dispatch({ type: 'CLOSE_FLOW' });
    } catch (error) {
      dispatch({ type: 'SET_REMOVE_ERROR', error: 'Failed to remove news article. Please try again.' });
    }
  };

  const handleDialogClose = (dialogType: 'PIN' | 'OPTIONS' | 'ADD' | 'REMOVE') => {
    // Only close if the user explicitly closes the dialog (not when transitioning)
    return (open: boolean) => {
      if (!open) {
        dispatch({ type: 'CLOSE_FLOW' });
      }
    };
  };

  const formatDate = (time: bigint) => {
    const date = new Date(Number(time) / 1000000);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Image Slider */}
      <ImageSlider images={sliderImages} />

      {/* Latest News Section */}
      <section className="container py-16 md:py-20">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Latest News
          </h1>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading news...</p>
            </div>
          ) : newsList.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No news articles yet. Be the first to post!</p>
            </div>
          ) : (
            newsList.map((news, index) => (
              <Card key={index} className="border-border/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(news.time)}</span>
                  </div>
                  <CardTitle className="text-2xl">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base whitespace-pre-wrap">
                    {news.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>

      {/* Floating Add Button */}
      <Button
        size="icon"
        className="fixed bottom-6 left-6 h-14 w-14 rounded-full shadow-lg z-40"
        onClick={handlePlusClick}
      >
        <Plus className="h-6 w-6" />
      </Button>

      {/* PIN Entry Dialog */}
      <Dialog open={flowState.step === 'PIN'} onOpenChange={handleDialogClose('PIN')}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter PIN</DialogTitle>
            <DialogDescription>
              Please enter your PIN to access the news management options.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pin">PIN</Label>
              <Input
                id="pin"
                type="password"
                placeholder="Enter PIN"
                value={flowState.pin}
                onChange={(e) => dispatch({ type: 'SET_PIN', pin: e.target.value })}
                onKeyDown={handlePinKeyDown}
              />
            </div>
            {flowState.pinError && (
              <Alert variant="destructive">
                <AlertDescription>{flowState.pinError}</AlertDescription>
              </Alert>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => dispatch({ type: 'CLOSE_FLOW' })}>
              Cancel
            </Button>
            <Button onClick={handlePinSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Options Dialog */}
      <Dialog open={flowState.step === 'OPTIONS'} onOpenChange={handleDialogClose('OPTIONS')}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Options</DialogTitle>
            <DialogDescription>
              Choose an action to manage news articles.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button
              onClick={handleAddNewsClick}
              className="w-full h-20 text-lg"
              variant="default"
            >
              Add a news article
            </Button>
            <Button
              onClick={handleRemoveNewsClick}
              className="w-full h-20 text-lg"
              variant="outline"
            >
              Remove a news article
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* News Entry Form Dialog */}
      <Dialog open={flowState.step === 'ADD'} onOpenChange={handleDialogClose('ADD')}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add a news article</DialogTitle>
            <DialogDescription>
              Enter the details for your news article.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <div className="flex gap-2 items-center">
                <Input
                  placeholder="Month"
                  value={flowState.month}
                  onChange={(e) => dispatch({ type: 'SET_FORM_FIELD', field: 'month', value: e.target.value })}
                  className="flex-1"
                />
                <Input
                  placeholder="Day"
                  value={flowState.day}
                  onChange={(e) => dispatch({ type: 'SET_FORM_FIELD', field: 'day', value: e.target.value })}
                  className="flex-1"
                />
                <Input
                  placeholder="Year"
                  value={flowState.year}
                  onChange={(e) => dispatch({ type: 'SET_FORM_FIELD', field: 'year', value: e.target.value })}
                  className="flex-1"
                />
              </div>
              <p className="text-sm text-muted-foreground">Format: MM / DD / YYYY</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="news-title">News Title</Label>
              <Input
                id="news-title"
                placeholder="Enter news title"
                value={flowState.title}
                onChange={(e) => dispatch({ type: 'SET_FORM_FIELD', field: 'title', value: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="news-description">News Description</Label>
              <Textarea
                id="news-description"
                placeholder="Enter news description"
                value={flowState.description}
                onChange={(e) => dispatch({ type: 'SET_FORM_FIELD', field: 'description', value: e.target.value })}
                rows={6}
              />
            </div>
            {flowState.formError && (
              <Alert variant="destructive">
                <AlertDescription>{flowState.formError}</AlertDescription>
              </Alert>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => dispatch({ type: 'CLOSE_FLOW' })}>
              Cancel
            </Button>
            <Button onClick={handleFormSubmit} disabled={publishNews.isPending}>
              {publishNews.isPending ? 'Publishing...' : 'Publish'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Remove News Dialog */}
      <Dialog open={flowState.step === 'REMOVE'} onOpenChange={handleDialogClose('REMOVE')}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Remove a news article</DialogTitle>
            <DialogDescription>
              Select a news article to remove from the list.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Select News Article</Label>
              <ScrollArea className="h-[300px] rounded-md border p-4">
                {newsList.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    No news articles available to remove.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {newsList.map((news, index) => (
                      <Card
                        key={index}
                        className={`cursor-pointer transition-all ${
                          flowState.selectedNewsToRemove === news.title
                            ? 'border-primary bg-primary/5'
                            : 'hover:border-primary/50'
                        }`}
                        onClick={() => dispatch({ type: 'SET_SELECTED_NEWS', title: news.title })}
                      >
                        <CardHeader className="p-4">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                            <Calendar className="h-3 w-3" />
                            <span>{formatDate(news.time)}</span>
                          </div>
                          <CardTitle className="text-base">{news.title}</CardTitle>
                          <CardDescription className="text-sm line-clamp-2">
                            {news.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </div>
            {flowState.removeError && (
              <Alert variant="destructive">
                <AlertDescription>{flowState.removeError}</AlertDescription>
              </Alert>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => dispatch({ type: 'CLOSE_FLOW' })}>
              Cancel
            </Button>
            <Button
              onClick={handleRemoveSubmit}
              disabled={removeNews.isPending || !flowState.selectedNewsToRemove}
              variant="destructive"
            >
              {removeNews.isPending ? 'Removing...' : 'Remove'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
