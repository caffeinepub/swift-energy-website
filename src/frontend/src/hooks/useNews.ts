import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { News } from '../backend';

export function useGetAllNews() {
  const { actor, isFetching } = useActor();

  return useQuery<News[]>({
    queryKey: ['news'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllNews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePublishNews() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ title, description }: { title: string; description: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.publishNews(title, description);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
  });
}

export function useRemoveNews() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (title: string) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.removeNews(title);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
  });
}
