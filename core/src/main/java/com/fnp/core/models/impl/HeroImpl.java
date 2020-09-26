package com.fnp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fnp.core.models.Header;
import com.fnp.core.models.Hero;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {Hero.class,
    ComponentExporter.class}, resourceType = HeroImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HeroImpl implements Hero {

  @SlingObject
  protected Resource resource;


  private static final Logger LOGGER = LoggerFactory.getLogger(HeroImpl.class);
  static final String RESOURCE_TYPE = "fnp/components/hero";

  @Override
  public String getExportedType() {
    return HeroImpl.RESOURCE_TYPE;
  }

  @Override
  public List<Map> getImageDetails() {
    List<Map> iconDetails = new ArrayList<>();
    if(null != resource) {
      Resource itemResource = resource.getChild("multi");
      if(itemResource != null && itemResource.hasChildren()) {
        for (Resource childResource : itemResource.getChildren()) {
          ValueMap valueMap = childResource.getValueMap();
          Map<String, String> iconMap = new HashMap<>();
          iconMap.put("imagePath", valueMap.get("fileReference", String.class));
          iconMap.put("altText", valueMap.get("altText", String.class));
          iconDetails.add(iconMap);
        }
      }
    }
    return iconDetails;
  }
}
