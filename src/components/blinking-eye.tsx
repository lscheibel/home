"use client";

import React, { useEffect, useState } from "react";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { sleep } from "@/utils/sleep";
import { flushSync } from "react-dom";

interface BlinkingEyeProps {
  active?: boolean;
}

const BlinkingEye = (
  props: BlinkingEyeProps & IconProps & React.RefAttributes<SVGSVGElement>,
) => {
  const [open, setOpen] = useState(true);
  const { active = true } = props;

  useEffect(() => {
    let mounted = true;

    const blink = async () => {
      await sleep(2_000 + Math.random() * 5_000);
      if (!mounted) return;
      flushSync(() => {
        setOpen(false);
      });
      await sleep(100);
      flushSync(() => {
        setOpen(true);
      });
      await sleep(10_000 + Math.random() * 1_000);
      blink();
    };

    if (active) blink();

    return () => {
      mounted = false;
    };
  }, [active]);

  return open ? <EyeOpenIcon {...props} /> : <EyeClosedIcon {...props} />;
};

export default React.memo(BlinkingEye);
