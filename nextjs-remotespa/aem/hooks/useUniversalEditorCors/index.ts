import { useCallback, useEffect, useRef } from 'react';

const useUniversalEditorCors = () => {
  const mounted = useRef(false);

  const imports = useCallback(async () => {
    try {
      await import('@adobe/universal-editor-cors');
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    mounted.current = typeof window !== 'undefined';

    if (mounted.current) {
      imports();

      return () => {
        mounted.current = false;
      };
    }
  }, [imports]);
};

export default useUniversalEditorCors;
